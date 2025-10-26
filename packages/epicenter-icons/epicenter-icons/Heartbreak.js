import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 5.99866L14 9.00061L11.5 12L13.5 14L12.5 16.0006', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 20.5C12 20.5 2 14.5 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 14.5 12 20.5 12 20.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Heartbreak',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
