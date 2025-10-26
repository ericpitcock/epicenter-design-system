import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 12.0001H16C15.4477 12.0001 15 12.4478 15 13.0001V14.0001C15 14.5524 15.4477 15.0001 16 15.0001H17C17.5523 15.0001 18 15.4478 18 16.0001V17.0001C18 17.5524 17.5523 18.0001 17 18.0001H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.5 12.0001H10.5M12.5 12.0001H10.5M10.5 12.0001V18.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Typescript01',
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
