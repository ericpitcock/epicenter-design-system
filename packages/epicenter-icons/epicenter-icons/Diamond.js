import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5858 13.4142C21.3668 12.6332 21.3668 11.3668 20.5858 10.5858L13.4142 3.41421C12.6332 2.63317 11.3668 2.63316 10.5858 3.41421L3.41421 10.5858C2.63317 11.3668 2.63316 12.6332 3.41421 13.4142L10.5858 20.5858C11.3668 21.3668 12.6332 21.3668 13.4142 20.5858L20.5858 13.4142Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Diamond',
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
