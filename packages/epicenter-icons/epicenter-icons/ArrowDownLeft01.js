import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.50003 9V17.5H15M6.92857 17.0714L17.5 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowDownLeft01',
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
