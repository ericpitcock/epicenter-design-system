import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 4L21.0586 4.71675C21.5836 4.83977 21.9165 5.35682 21.8112 5.88563L19.3217 18.3905C19.1354 19.3262 18.3142 20 17.3602 20H17M6 4L2.94138 4.71676C2.41642 4.83978 2.08351 5.35683 2.18879 5.88563L4.6783 18.3905C4.86457 19.3262 5.68578 20 6.6398 20H7', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 7L11.5711 9.5L9 18L11.9993 22L14.9993 18L12.428 9.5L14 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 5L8 2L6 4L9 8L12 5ZM12 5L16 2L18 4L15 8L12 5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Suit02',
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
