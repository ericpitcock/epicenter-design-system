import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 12H12M3 19V5M12 19V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 11H16V14H17.5C18.8807 14 20 15.1319 20 16.5126C20 17.8795 18.8668 19 17.5 19C16.5 19 16 18.5 16 18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Heading05',
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
