import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.4759 19.0621C19.1422 19.4721 20 18.9928 20 18.2104V5.78956C20 5.00724 19.1422 4.52789 18.4759 4.93791L8.38394 11.1483C7.74941 11.5388 7.74941 12.4612 8.38394 12.8517L18.4759 19.0621Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 19.5L4 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Previous',
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
