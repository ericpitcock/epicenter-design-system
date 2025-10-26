import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 11V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 5.75V7H8.5C7.11929 7 6 5.88071 6 4.5V4.25C6 3.00736 7.00736 2 8.25 2C10.3211 2 12 3.67893 12 5.75Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 5.75V7H15.5C16.8807 7 18 5.88071 18 4.5V4.25C18 3.00736 16.9926 2 15.75 2C13.6789 2 12 3.67893 12 5.75Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20.4443 7H3.56105C2.97904 7 2.50682 7.44617 2.50535 7.99747L2.5 9.99747C2.49853 10.5507 2.97161 11 3.5557 11H20.4443C21.0273 11 21.5 10.5523 21.5 10V8C21.5 7.44772 21.0273 7 20.4443 7Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 11V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Gift',
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
            _hoisted5
        ])
    }
})
