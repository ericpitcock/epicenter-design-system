import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 4C10 3.44772 9.55228 3 9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 15C10 14.4477 9.55228 14 9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 7.5L18 5L20.5 7.5M18 5.60878V13.0632C18 13.6568 17.7364 14.2197 17.2804 14.5997L15 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SortByUp01',
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
