import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 8.5L14 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.6731 3.5H6.32692C6.01467 3.5 5.71936 3.63523 5.5243 3.86752L2.22523 7.79646C1.92949 8.14866 1.9245 8.64776 2.21315 9.00527L11.1853 20.1178C11.5967 20.6274 12.4033 20.6274 12.8147 20.1178L21.7868 9.00527C22.0755 8.64776 22.0705 8.14866 21.7748 7.79645L18.4757 3.86752C18.2806 3.63523 17.9853 3.5 17.6731 3.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Diamond02',
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
