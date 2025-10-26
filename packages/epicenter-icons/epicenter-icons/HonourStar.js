import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 3.00098H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.5 2.99976V15.9806L11.9363 20.9827C11.97 21.0054 12.0141 21.0054 12.0478 20.9828L19.5 15.9806V2.99976', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.66667 14L12 13.087L14.3333 14L14.0417 11.5652L15.5 9.73913L13.4583 9.13043L12 7L10.5417 9.13043L8.5 9.73913L9.95833 11.5652L9.66667 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HonourStar',
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
