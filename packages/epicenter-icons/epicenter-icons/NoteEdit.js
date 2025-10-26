import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.0828 2V5M6.08276 2V5M10.5828 2V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5828 12V5.5C18.5828 4.39543 17.6873 3.5 16.5828 3.5H4.58276C3.47819 3.5 2.58276 4.39543 2.58276 5.5V20C2.58276 21.1046 3.47819 22 4.58276 22H10.5828', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.58276 15H10.5828M6.58276 11H14.5828', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.5899 21.5986L13.5828 22L13.9842 19.9929C14.0195 19.8165 14.1062 19.6545 14.2333 19.5273L18.4938 15.2668C18.8496 14.9111 19.4264 14.9111 19.7822 15.2668L20.3159 15.8005C20.6717 16.1563 20.6717 16.7332 20.3159 17.0889L16.0554 21.3494C15.9283 21.4766 15.7663 21.5633 15.5899 21.5986Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NoteEdit',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
