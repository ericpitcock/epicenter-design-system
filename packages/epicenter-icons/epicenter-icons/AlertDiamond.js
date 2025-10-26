import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 15.5858V8.41421C21.5 8.149 21.3946 7.89464 21.2071 7.70711L16.2929 2.79289C16.1054 2.60536 15.851 2.5 15.5858 2.5H8.41421C8.149 2.5 7.89464 2.60536 7.70711 2.79289L2.79289 7.70711C2.60536 7.89464 2.5 8.149 2.5 8.41421V15.5858C2.5 15.851 2.60536 16.1054 2.79289 16.2929L7.70711 21.2071C7.89464 21.3946 8.149 21.5 8.41421 21.5H15.5858C15.851 21.5 16.1054 21.3946 16.2929 21.2071L21.2071 16.2929C21.3946 16.1054 21.5 15.851 21.5 15.5858Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 8V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 15.9883V15.9983', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlertDiamond',
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
