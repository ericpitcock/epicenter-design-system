import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 14V5C21.5 3.34315 20.1569 2 18.5 2H5.5C3.84315 2 2.5 3.34315 2.5 5V14C2.5 15.6569 3.84315 17 5.5 17L18.5 17C20.1569 17 21.5 15.6569 21.5 14Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 18L12 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 22L8.9 20.8C9.19443 20.4074 9.34164 20.2111 9.55279 20.1056C9.76393 20 10.0093 20 10.5 20H13.5C13.9907 20 14.2361 20 14.4472 20.1056C14.6584 20.2111 14.8056 20.4074 15.1 20.8L16 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Presentation05',
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
