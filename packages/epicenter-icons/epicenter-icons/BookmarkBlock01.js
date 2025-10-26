import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.4749 7.97487C20.1082 7.3415 20.5 6.4665 20.5 5.5C20.5 3.567 18.933 2 17 2C16.0335 2 15.1585 2.39175 14.5251 3.02513M19.4749 7.97487C18.8415 8.60825 17.9665 9 17 9C15.067 9 13.5 7.433 13.5 5.5C13.5 4.5335 13.8917 3.6585 14.5251 3.02513M19.4749 7.97487L14.5251 3.02513' })
const _hoisted2 = h('path', { 'd': 'M3.5 8H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V22L11 18L18.5 22V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BookmarkBlock01',
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
