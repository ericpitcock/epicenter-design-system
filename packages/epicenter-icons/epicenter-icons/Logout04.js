import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.9999 6.5V4.5C14.9999 3.39543 14.1045 2.5 12.9999 2.5H4.99994C3.89537 2.5 2.99994 3.39543 2.99994 4.5V19.5C2.99994 20.6046 3.89537 21.5 4.99994 21.5H12.9999C14.1045 21.5 14.9999 20.6046 14.9999 19.5V17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 4.5H19C20.1046 4.5 21 5.39543 21 6.5V17.5C21 18.6046 20.1046 19.5 19 19.5H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 14.5L17 12L14.5 9.5M16 12H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Logout04',
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
