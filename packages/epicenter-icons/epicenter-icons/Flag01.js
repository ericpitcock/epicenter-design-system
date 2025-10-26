import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 20.9971V16.0042M5 16.0042L5 3.01223C5 3.00505 5.00734 3.00021 5.01394 3.00304L18.4058 8.74076C18.6405 8.84132 18.6502 9.17046 18.4219 9.28477L5 16.0042Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Flag01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
