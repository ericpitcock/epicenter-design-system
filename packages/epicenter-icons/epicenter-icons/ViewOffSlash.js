import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.439 15.439C21 14 22 12 22 12C20.5 9 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M17 17.4186C15.5657 18.3368 13.8793 19 12 19C7.31078 19 3.5 15 2 12C2 12 3.5 9 6.5 6.91847', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 3L21 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ViewOffSlash',
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
