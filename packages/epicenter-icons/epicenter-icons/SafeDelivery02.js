import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21V16C8 15.4477 8.44772 15 9 15H15C15.5523 15 16 15.4477 16 16V21Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.009 17.5H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 9.00924C4.01337 5.26141 7.35446 1.89255 12.4172 2.00262C16.1995 2.16085 19.9516 4.88231 20 8.98485M4 9.00924L11.9343 14.9799C11.97 15.0067 12.0191 15.0067 12.0548 14.9798L20 8.98485M4 9.00924L20 8.98485', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SafeDelivery02',
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
