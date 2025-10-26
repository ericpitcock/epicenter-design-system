import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.7116 11.671L15.6393 13.5C15.6393 12.1103 15.6393 11.4155 15.4376 10.8867C15.0858 9.96466 14.3147 9.28087 13.377 9.05945C12.8393 8.93248 12.172 9.03555 10.8373 9.2417L7 10V4.75C7 3.7835 6.2165 3 5.25 3C4.2835 3 3.5 3.7835 3.5 4.75V18C3.5 19.6569 4.84315 21 6.5 21H13.4892C14.4395 21 15.3337 20.5497 15.8995 19.7861L20.1218 14.0883C20.623 13.4531 20.6264 12.5441 20.1299 11.905C19.5331 11.1369 18.4369 11.0308 17.7116 11.671Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Shaka02',
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
