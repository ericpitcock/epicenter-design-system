import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 10L10.5 10', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 11L14.5 12L17.5 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.5 16L10.5 16', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M13.5 17L14.5 18L17.5 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15.9999 3.5H18.4999C19.6044 3.5 20.4999 4.39543 20.4999 5.5V20C20.4999 21.1046 19.6044 22 18.4999 22L5.49988 22C4.39531 22 3.49988 21.1046 3.49988 20V5.5C3.49988 4.39543 4.39531 3.5 5.49988 3.5H7.99988', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M14.4999 2H9.49988C8.67145 2 7.99988 2.67157 7.99988 3.5C7.99988 4.32843 8.67145 5 9.49988 5H14.4999C15.3283 5 15.9999 4.32843 15.9999 3.5C15.9999 2.67157 15.3283 2 14.4999 2Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Quiz03',
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
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
