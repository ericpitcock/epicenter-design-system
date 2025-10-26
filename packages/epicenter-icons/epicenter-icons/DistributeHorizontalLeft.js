import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 2V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 15V9C17 8.44772 17.4477 8 18 8H21C21.5523 8 22 8.44772 22 9V15C22 15.5523 21.5523 16 21 16H18C17.4477 16 17 15.5523 17 15Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 18V6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 5.44772 10 6V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DistributeHorizontalLeft',
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
