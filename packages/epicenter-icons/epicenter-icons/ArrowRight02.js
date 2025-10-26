import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 17.9995L19 11.9995L13 5.99951M18.5 11.9995L5 11.9995', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowRight02',
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
