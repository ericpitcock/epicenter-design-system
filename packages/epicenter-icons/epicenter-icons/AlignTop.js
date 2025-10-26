import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 8C14.4477 8 14 8.44772 14 9L14 12.9992C14 13.5518 14.4482 13.9996 15.0008 13.9992L18.0008 13.9969C18.5528 13.9964 19 13.5489 19 12.9969L19 9C19 8.44772 18.5523 8 18 8L15 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 8C5.44772 8 5 8.44772 5 9L5 18.9984C5 19.5513 5.44867 19.9993 6.00156 19.9984L9.00156 19.9937C9.55324 19.9929 10 19.5454 10 18.9937L10 9C10 8.44772 9.55229 8 9 8L6 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 4L2 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlignTop',
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
