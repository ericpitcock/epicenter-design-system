import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 19C3.6 17.4 3 15.3333 3 14L21 14C21 15.3333 20.4 17.4 18 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 2L18 9.99999L7 10L14 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 14L14 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 21.6083C2.79944 22.106 3.83288 22.106 4.65182 21.6083C5.95823 20.7972 7.6546 20.7972 8.9805 21.6083C8.9805 21.6267 9.00001 21.6267 9.00001 21.6267C9.79945 22.1244 10.8524 22.1244 11.6518 21.6267C12.9777 20.8157 14.6741 20.8157 16 21.6267C16.7994 22.1244 17.8329 22.106 18.6518 21.6083C19.6529 20.9868 20.8831 20.8415 22 21.1726', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SailboatOffshore',
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
