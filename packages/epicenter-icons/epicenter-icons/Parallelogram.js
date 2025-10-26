import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.31063 18.7575L5.81063 4.75746C5.92193 4.3123 6.32191 4 6.78078 4H20.7192C21.3698 4 21.8472 4.61139 21.6894 5.24254L18.1894 19.2425C18.0781 19.6877 17.6781 20 17.2192 20H3.28078C2.63021 20 2.15285 19.3886 2.31063 18.7575Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Parallelogram',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
