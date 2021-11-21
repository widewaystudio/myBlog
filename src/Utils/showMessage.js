import getRootDom from './getComponentRootDom'
import Icon from '@/components/Icon/'
import message from '@/style/message.module.less';
export default function(options={}){
 let container = options.container || document.body;
 let type = options.type || "info";
 let duration = options.duration || 2000;
 let context =  options.context || '';
   let div = document.createElement('div');
   let inner = getRootDom(Icon,{type});
   div.className = `${message.message} ${message["message-" + type]}`;
   div.innerHTML = `${inner.outerHTML}<span>${context}</span>`;

   if(getComputedStyle(container).position === "static" && options.container){
      container.style.position = "relative";
   }

   container.appendChild(div);
    div.clientHeight;
    div.style.transform = "translate(-50%,-50%)";
    div.style.opacity = 1;
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = "translate(-50%,-50%) translateY(-25px)";
        div.addEventListener("transitionend",function(){
            div.remove();
             options.callback && options.callback.call(this);
        },{once:true});



    },duration);



}
