import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 20H22L19.7778 16H4.22222L2 20Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.1111 13L16.4444 10H7.55556L5.88889 13H18.1111Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 2L9.22222 7H14.7778L12 2Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PyramidStructure01',
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
