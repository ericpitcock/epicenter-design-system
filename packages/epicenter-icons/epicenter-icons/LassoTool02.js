import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.98703 17C9.98703 18.1046 8.87064 19 7.49351 19C6.11638 19 5 18.1046 5 17C5 15.8954 6.11638 15 7.49351 15C8.87064 15 9.98703 15.8954 9.98703 17ZM9.98703 17C10.0493 17.7724 10.0064 20.5 7.00254 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.5 15.5L2 2L13.5 6L22 2L21 15L10 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LassoTool02',
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
