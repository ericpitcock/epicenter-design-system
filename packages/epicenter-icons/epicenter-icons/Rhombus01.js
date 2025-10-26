import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.70712 11.2929C2.31659 11.6834 2.31659 12.3166 2.70712 12.7071L11.293 21.2929C11.6835 21.6834 12.3167 21.6834 12.7072 21.2929L21.2929 12.7074C21.6834 12.3168 21.6834 11.6837 21.2929 11.2931L12.7072 2.70713C12.3167 2.31659 11.6835 2.31659 11.293 2.70711L2.70712 11.2929Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Rhombus01',
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
