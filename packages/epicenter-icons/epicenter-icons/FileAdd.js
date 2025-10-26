import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.9992 2H18.0006C19.1052 2 20.0006 2.89543 20.0006 4V15.0145L12.9992 22.0015H6.00391C4.89805 22.0015 4.00209 21.1041 4.00391 19.9982V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 15H15C13.8954 15 13 15.8954 13 17V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 6H4M8 2V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileAdd',
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
