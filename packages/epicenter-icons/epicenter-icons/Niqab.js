import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 8C18.5 4.95214 15.7046 2 12.5002 2C9.29573 2 6.5 4.95214 6.5 8C6.5 9.92648 5.15212 14.2463 3.07231 17.236C2.76704 17.6748 2.81363 18.2828 3.2317 18.6159C8.89492 23.128 16.1051 23.128 21.7683 18.6159C22.1864 18.2828 22.233 17.6748 21.9277 17.236C19.8479 14.2463 18.5 9.92648 18.5 8Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.5 5C10.8431 5 9.5 6.33121 9.5 7.97334V17C9.5 17.5523 9.94772 18 10.5 18H14.5C15.0523 18 15.5 17.5523 15.5 17V7.97334C15.5 6.33121 14.1569 5 12.5 5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 9H15.5' })
const _hoisted4 = h('path', { 'd': 'M9.5 12H15.5' })

export default defineComponent({
    name: 'Niqab',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
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
