import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 17.5L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 8C9.89543 8 9 8.67157 9 9.5C9 10.3284 9.89543 11 11 11C12.1046 11 13 11.6716 13 12.5C13 13.3284 12.1046 14 11 14M11 8C11.8708 8 12.6116 8.4174 12.8862 9M11 8L11 7M11 14C10.1292 14 9.38836 13.5826 9.1138 13M11 14L11 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SearchDollar',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
