import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 18.2104V5.78956C16 5.00724 15.1422 4.52789 14.4759 4.93791L4.38394 11.1483C3.74941 11.5388 3.74941 12.4612 4.38394 12.8517L14.4759 19.0621C15.1422 19.4721 16 18.9928 16 18.2104Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 4.5L20 19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Backward01',
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
