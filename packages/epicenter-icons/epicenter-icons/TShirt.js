import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 13.9998L2.7523 12.3759C2.31745 12.1585 2.10199 11.6598 2.24169 11.1941L3.5 6.99977L6.5 5.49977L8 2.99977C9.2 2.19977 11.1667 1.99977 12 1.99977C12.8333 1.99977 14.8 2.19977 16 2.99977L17.5 5.49977L20.5 6.99977L21.7583 11.1941C21.898 11.6598 21.6826 12.1585 21.2477 12.3759L18 13.9998', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 10.9998V19.9998C6 21.1043 6.89543 21.9998 8 21.9998H16C17.1046 21.9998 18 21.1043 18 19.9998V10.9998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.5 5.49782L10.8241 8.64065C11.5252 9.15022 12.4748 9.15022 13.1759 8.64066L17.5 5.49782', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9.5 2.49977L10.5 7.99977M14.5 2.49977L13.5 7.99977', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TShirt',
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
