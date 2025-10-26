import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.0278 6.775C20.0278 6.775 17.1945 3.925 12.0001 2.5C6.80562 3.925 3.97228 6.775 3.97228 6.775C3.97228 6.775 3.50006 9.15 3.50006 12C3.50006 14.85 3.97228 17.225 3.97228 17.225C3.97228 17.225 6.80562 20.075 12.0001 21.5C17.1945 20.075 20.0278 17.225 20.0278 17.225C20.0278 17.225 20.5001 14.85 20.5001 12C20.5001 9.15 20.0278 6.775 20.0278 6.775Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 8V15', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 12H14.5', 'stroke-linecap': 'square' })
const _hoisted4 = h('path', { 'd': 'M9.50006 7.3457L8.00006 9H11.0001L9.50006 7.3457Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14.5001 16.6543L16.0001 15L13.0001 15L14.5001 16.6543Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M14.5 9V16', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Hackerrank',
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
