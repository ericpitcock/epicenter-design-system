import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 2V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 2V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H6C6.55228 19 7 18.5523 7 18V6C7 5.44772 6.55228 5 6 5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 8H15C14.4477 8 14 8.44772 14 9V15C14 15.5523 14.4477 16 15 16H18C18.5523 16 19 15.5523 19 15V9C19 8.44772 18.5523 8 18 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DistributeHorizontalRight',
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
