import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.5 21.5C11.8137 21.5 14.5 18.8137 14.5 15.5C14.5 12.1863 11.8137 9.5 8.5 9.5C5.18629 9.5 2.5 12.1863 2.5 15.5C2.5 18.8137 5.18629 21.5 8.5 21.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 6.66771C10.33 4.24313 12.6287 2.5 15.3346 2.5C18.7396 2.5 21.5 5.26035 21.5 8.66542C21.5 11.3713 19.7569 13.67 17.3323 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.5 8.5V5.5C2.5 4.39543 3.39543 3.5 4.5 3.5H7.5L6 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21.5 15.5L21.5 18.5C21.5 19.6046 20.6046 20.5 19.5 20.5L16.5 20.5L18 18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CoinsSwap',
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
