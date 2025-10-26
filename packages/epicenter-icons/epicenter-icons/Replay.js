import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.0413 2 17.7655 3.35767 19.5996 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 2.5V6H16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.9961 15.1451C10.3295 15.526 9.5 15.0446 9.5 14.2768V9.72318C9.5 8.95536 10.3295 8.47399 10.9961 8.85494L14.9806 11.1318C15.6524 11.5157 15.6524 12.4843 14.9806 12.8682L10.9961 15.1451Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Replay',
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
