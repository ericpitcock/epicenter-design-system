import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5528 11.1056C21.8343 11.6686 21.8343 12.3314 21.5528 12.8944L18.0528 19.8944C17.714 20.572 17.0215 21 16.2639 21H7.73607C6.97852 21 6.286 20.572 5.94721 19.8944L2.44721 12.8944C2.16569 12.3314 2.16569 11.6686 2.44721 11.1056L5.94722 4.10557C6.286 3.428 6.97853 3 7.73607 3L16.2639 3C17.0215 3 17.714 3.42801 18.0528 4.10557L21.5528 11.1056Z', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'clip-rule': 'evenodd', 'd': 'M12 15.5H12.009H12Z', 'fill': 'currentColor', 'fill-rule': 'evenodd' })
const _hoisted3 = h('path', { 'd': 'M12 15.5H12.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 8.5V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Spam',
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
