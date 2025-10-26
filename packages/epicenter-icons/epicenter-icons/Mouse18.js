import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 7V2.5M12 13V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 8C13.5 7.44772 13.0523 7 12.5 7H11.5C10.9477 7 10.5 7.44772 10.5 8V10C10.5 10.5523 10.9477 11 11.5 11H12.5C13.0523 11 13.5 10.5523 13.5 10V8Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4.5 12.5C4.5 9 5.5 6 6 5C8 4.5 11 3 12 2C13 3 16 4.5 18 5C18.5 6 19.5 9 19.5 12.5C19.5 16 17.5 20 12 22C6.5 20 4.5 16 4.5 12.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mouse18',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
