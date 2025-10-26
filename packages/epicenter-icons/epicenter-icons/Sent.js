import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5 12.5L15 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.74669 8.40628C1.68668 8.78486 1.77814 10.3132 2.87573 10.5627L11.5 12.5L13.4373 21.1243C13.6868 22.2219 15.2151 22.3133 15.5937 21.2533L21.9322 3.50557C22.2514 2.61167 21.3883 1.74856 20.4944 2.06781L2.74669 8.40628Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sent',
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
