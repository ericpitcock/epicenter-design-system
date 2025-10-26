import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 14H4C3.44772 14 3 14.4477 3 15V18C3 18.5523 3.44772 19 4 19H6C6.55228 19 7 18.5523 7 18V15C7 14.4477 6.55228 14 6 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 10H11C10.4477 10 10 10.4477 10 11V18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18V11C14 10.4477 13.5523 10 13 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 6H18C17.4477 6 17 6.44772 17 7V18C17 18.5523 17.4477 19 18 19H20C20.5523 19 21 18.5523 21 18V7C21 6.44772 20.5523 6 20 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SignalFull02',
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
