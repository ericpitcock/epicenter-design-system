import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 3C3.58901 4.93486 2 8.24345 2 12C2 15.7565 3.58901 19.0651 6 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 3C20.411 4.93486 22 8.24345 22 12C22 15.7565 20.411 19.0651 18 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Num1stBracket',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
