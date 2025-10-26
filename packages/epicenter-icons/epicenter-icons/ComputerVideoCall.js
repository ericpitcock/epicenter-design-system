import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V4C22 2.89543 21.1046 2 20 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 22L17 22', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 14C9.83846 11.4046 14.1188 11.263 16 14M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ComputerVideoCall',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
