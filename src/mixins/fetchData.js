export default function (defaultDataV = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataV,
        count: 0,
      };
    },
    async created() {
      this.data = await this.fetchData();
      this.count = this.data.length;
      this.isLoading = false;
    },
  };
}
