import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 9V17.5H9.00003M17.0714 17.0714L6.50003 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowDownRight01',
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
