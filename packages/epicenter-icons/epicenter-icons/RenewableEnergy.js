import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.5 4.5L9.95918 2C5.96094 2.8116 2.8116 5.96094 2 9.95918M19.5 9.5L22 9.95918C21.1884 5.96094 18.0391 2.8116 14.0408 2M14.5 19.5L14.0408 22C18.0391 21.1884 21.1884 18.0391 22 14.0408M9.95918 22C5.96094 21.1884 2.8116 18.0391 2 14.0408L4.5 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 12.4583L12.7778 7V11.5486L15.5 11.5486L11.2222 17V12.4583H8.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RenewableEnergy',
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
