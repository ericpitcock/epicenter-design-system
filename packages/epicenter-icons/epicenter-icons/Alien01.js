import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.33333 9H6V10.3333C6 11.8061 7.19391 13 8.66667 13H10V11.6667C10 10.1939 8.80609 9 7.33333 9Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.6667 9H18V10.3333C18 11.8061 16.8061 13 15.3333 13H14V11.6667C14 10.1939 15.1939 9 16.6667 9Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 17H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 11C21 16.5228 15 22 12 22C9 22 3 16.5228 3 11C3 5.47715 7.02944 2 12 2C16.9706 2 21 5.47715 21 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Alien01',
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
