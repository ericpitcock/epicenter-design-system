// export const debounceMixin = {
//   data() {
//     return {
//       debounceTimer: null,
//     }
//   },
//   methods: {
//     debounce(callback, delay = 300) {
//       clearTimeout(this.debounceTimer)
//       this.debounceTimer = setTimeout(callback, delay)
//     },
//   },
// }

{/* <template>
  <div>
    <input type="text" v-model="query" @change="search">
  </div>
</template>

<script>
import { debounceMixin } from '@/mixins/debounce';

export default {
  mixins: [debounceMixin],
  mounted() {
    // ...
  },
  methods: {
    handleQuery(e) {
      this.$emit('geocoder-result', e.result);
    },
    search() {
      this.debounce(() => {
        // call the Mapbox Geocoder's `query` method with the current input value
        geocoder.query(this.query);
      });
    },
  },
};
</script> */}

const debounceMixin = {
  methods: {
    debounce(func, delay, { leading } = {}) {
      let timerId

      return (...args) => {
        if (!timerId && leading) {
          func(...args)
        }
        clearTimeout(timerId)

        timerId = setTimeout(() => func(...args), delay)
      }
    }
  }
}

export default debounceMixin

