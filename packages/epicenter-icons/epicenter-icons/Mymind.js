import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.4956 10.106C21.0362 15.5278 18.9292 20.7711 14.7894 21.8171C10.6497 22.8631 6.04495 19.3158 4.50438 13.894C2.96382 8.47215 5.07084 3.22891 9.21056 2.18289C13.3503 1.13686 17.9551 4.68416 19.4956 10.106Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 17L11.5 7L16.5 15.5L13.5 17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '8.5', 'cy': '11', 'r': '1', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mymind',
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
