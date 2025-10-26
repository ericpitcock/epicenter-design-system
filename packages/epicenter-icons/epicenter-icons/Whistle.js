import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '8', 'cy': '15', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 21C11.3137 21 14 18.3137 14 15H18.7929C18.9255 15 19.0527 14.9473 19.1464 14.8536L21.8536 12.1464C21.9473 12.0527 22 11.9255 22 11.7929V9H15.5L15 10.5H12.5L11.5 9H8C4.68629 9 2 11.6863 2 15C2 18.3137 4.68629 21 8 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 5V3M11 6L9.5 4.5M16 6L17.5 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Whistle',
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
