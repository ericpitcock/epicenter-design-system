import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 9H11C9.89543 9 9 9.89543 9 11V15L13.0007 14.9986C14.105 14.9982 15 14.1029 15 12.9986V9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.5 15H4C2.89543 15 2 14.1046 2 13L2 12.5M2 4.5L2 4C2 2.89543 2.89543 2 4 2L4.5 2M12.5 2L13 2C14.1046 2 15 2.89543 15 4V5M9.5 2L7.5 2M2 9.5L2 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 18.5L9 19.9999C9 21.1045 9.89542 21.9999 11 21.9999L19.9993 22C21.1038 22 21.9993 21.1046 21.9993 20.0001L21.9999 11.0001C21.9999 9.89552 21.1045 9.00001 19.9999 9.00002L18.5 9.00004', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PathfinderCrop',
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
