import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22C18 22 19.5 17.49 19.5 12C19.5 6.50998 18 2 12 2C5.99993 2 4.5 6.50996 4.5 12C4.5 17.49 5.99993 22 12 22Z' })
const _hoisted2 = h('path', { 'd': 'M13.5 10V7C13.5 6.44772 13.0523 6 12.5 6H11.5C10.9477 6 10.5 6.44772 10.5 7V10C10.5 10.5523 10.9477 11 11.5 11H12.5C13.0523 11 13.5 10.5523 13.5 10Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 6V2', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mouse22',
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
